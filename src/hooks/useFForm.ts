import type { SyntheticEvent } from 'react';
import type { ZodSchema } from 'zod';

import { useState, useTransition } from 'react';
import { useFormState } from 'react-dom';


interface UseFFormHook<FormState> {
  handleAction: (payload: FormData) => void;
  handleSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
  isPending: boolean;
  actionState: FormState;
  errors: Record<string, { message: string }>;
  setErrors: (errors: Record<string, { message: string }>) => void;
}

function useFForm<FormState>({ formSchema, formAction, initialFormActionState }: {
  formSchema: ZodSchema,
  formAction: (
    formState: Awaited<FormState>,
    formData: FormData
  ) => Promise<any>,
  initialFormActionState: Awaited<FormState>
}): UseFFormHook<FormState> {
  const [actionState, handleAction] = useFormState(formAction, initialFormActionState);
  const [errors, setErrors] = useState({});
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrors({});
    const validationErrors = {};
    const formData = new FormData(event.currentTarget);
    const validation = formSchema.safeParse({
      email: formData.get('email')
    });

    if (validation.success ) {
      startTransition(async () => {
        await handleAction(formData);
      });
    } else {
      for (const issue of validation.error.issues) {
        const { path, message } = issue;
        validationErrors[path[0]] = { message };
      }

      console.info({ validationErrors });
      setErrors(validationErrors);
    }
  }

  console.info('server', actionState);

  return {
    handleAction, handleSubmit,
    isPending, actionState,
    errors, setErrors
  };
}


export default useFForm;
