'use client';

import { useEffect, useId } from 'react';
import { useFormState } from 'react-dom';

import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';
import { useForm } from 'react-hook-form';

import formSchema from './schema';
import joinEmailAction from './actions';

import SubmitButton from '@/components/SubmitButton';
import styles from './styles.module.css';


const ajv = new Ajv({
  allErrors: true,
  allowUnionTypes: true,
  coerceTypes: true
});
ajvFormats(ajv, ['email']);
ajvErrors(ajv, {
  keepErrors: false,
  singleError: false
});
const validate = ajv.compile(formSchema);

function JoinForm() {
  const inputId = useId();
  const {
    clearErrors,
    formState: { errors },
    getValues,
    register,
    setError
  } = useForm({
    mode: 'onSubmit'
  });

  const initialState = { success: null, errors: [] };
  const [server, formAction] = useFormState(joinEmailAction, initialState);

  async function handleAction(FormData: FormData) {
    clearErrors();

    try {
      const data = await validate({ email: FormData.get('email') });

      return formAction(data);
    } catch (error) {
      if (!(error instanceof Ajv.ValidationError)) throw error;

      error.errors.forEach((err) => {
        const { instancePath, message } = err;
        // Errors are set on RHF fields
        console.log(err);
        setError(instancePath.replace('/', ''), {
          message
        });
      });

      return;
    }
  }

  // handle responses from the server
  useEffect(() => {
    if (!server.success) {
      server.errors.forEach((err) => {
        console.log('err', err);
        const { instancePath, message } = err;
        if (!instancePath) return;

        setError(instancePath.replace('/', ''), {
          message
        });
      });
    }
  }, [server]);

  return (
    <>
      {server.success ? (
        <AlmostDone email={getValues('email')} />
      ) : server.errors && server.errors[0]?.server ? (
        <div className={styles['error-message']}>
          <p>
            Something went wrong!
            <br />
            Please try again laters.
          </p>
        </div>
      ) : (
        <form name="JoinForm" className={styles['form']} action={handleAction}>
          <p id={inputId}>Subscribe to our newsletter and get notified of upcoming events</p>

          <div className={styles['error-message']}>{errors.email?.message || server.errors.email?.message}</div>
          <input type="text" {...register('email')} placeholder="example@mail.com" aria-describedby={inputId} />

          <SubmitButton btn="white" />
        </form>
      )}
    </>
  );
}

function AlmostDone({ email }: { email: string }) {
  return (
    <div className={styles['almost-done']}>
      <h1>Almost Done!</h1>
      <h2>Check your email</h2>
      <p>
        We sent you an email at
        <br />
        <span className={styles['email-sent-to']}>{email}</span>
        <br />
        Click the link to finish your registration
      </p>
    </div>
  );
}

export default JoinForm;
