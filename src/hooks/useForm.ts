'use client';

import type { SyntheticEvent } from 'react';
import type { ZodSchema } from 'zod';

import { useActionState, useState } from 'react';


interface UseFormHook<FormState, Payload> {
  handleAction: (payload: Payload) => void;
  handleSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
  isPending: boolean;
  actionState: FormState;
  errors: Record<string, { message: string }>;
  setErrors: (errors: Record<string, { message: string }>) => void;
}

function useForm<State, Payload>({ formSchema, formAction, initialFormActionState }: {
  formSchema: ZodSchema,
  formAction: (
    formState: Awaited<State>,
    payload: Payload
  ) => Promise<any>,
  initialFormActionState: Awaited<State>
}): UseFormHook<State, Payload> {
  const [actionState, handleAction, isPending] = useActionState(formAction, initialFormActionState);
  const [errors, setErrors] = useState({});

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrors({});  // reset errors
    const validationErrors = {};
    const formData = new FormData(event.currentTarget);
    const validation = formSchema.safeParse({
      email: formData.get('email')
    });

    if (validation.success ) {
      handleAction(formData as Payload);
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


export default useForm;
