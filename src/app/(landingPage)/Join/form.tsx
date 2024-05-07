// 'use client'

// import { FC, useRef } from 'react'
// import { useForm } from 'react-hook-form'
// import { useFormState, useFormStatus } from 'react-dom'
// import loginPasswordless from './actions';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';


// const joinFormSchema = z
//   .object({
//     email: z.string()
//       .min(6, { message: 'Email is required' })
//       .max(254)
//   });

// const JoinForm: FC = () => {
//   const formRef = useRef<HTMLFormElement>(null)

//   const [state, formAction] = useFormState(loginPasswordless, null)

//   const { trigger, formState } = useForm({
//     resolver: zodResolver(joinFormSchema),
//     mode: 'onBlur',
//     defaultValues: {
//       email: '',
//       ...(state?.fields ?? {}),
//     },
//   })

//   const SubmitButton = () => {
//     const { pending } = useFormStatus()

//     return (
//       <button
//         disabled={pending}
//         type="submit"
//         className="mt-4 w-full"
//       >
//         {pending ? 'Processing...' : 'Continue'}
//       </button>
//     );
//   }

//   return (
//     <>
//         <form
//           ref={formRef}
//           action={formAction}
//           onSubmit={e => {
//             console.log('triggering here');
//             trigger()
//             if (formState.isValid) {
//               formRef.current?.requestSubmit()
//             } else {
//               e.preventDefault()
//             }
//           }}
//           className="mt-8"
//         >
//           <div>
//             <input
//               id='email'
//               className="w-full"
//               name="email"
//               placeholder="Enter your email"
//             />
//           </div>
//           <SubmitButton />
//         </form>
//     </>
//   )
// }

'use client';

import useForm from '@Hooks/useForm'
import joinEmailSchema from './schema';
import joinEmailAction from './actions';

import SubmitButton from '@Components/SubmitButton';
import styles from './styles.module.css';


function JoinForm() {
  // NOTE: if user does not use `handleSubmit`, they will need to use `startTransition` & `setErrors`
  const { handleAction, handleSubmit, actionState, isPending, errors } = useForm({
    formSchema: joinEmailSchema,
    formAction: joinEmailAction,
    initialFormActionState: { success: false, errors: null, data: null }
  });

  return (
    <div className={styles['content']}>
      <h1>Join the<br />Community</h1>

      {actionState.success
        ? <AlmostDone email={actionState.data?.email} />
        : <>
            <p>Subscribe to our newsletter and get notified of upcoming events</p>
            <form
              id="JoinForm"
              name="JoinForm"
              className={styles['form']}
              action={handleAction}   // server
              onSubmit={handleSubmit} // client
            >
              <p className={styles['error-message']}>
                {errors.email?.message}
              </p>

              <div className={styles['actions']}>
                <input
                  id="email"
                  name="email"
                  type="text"
                  minLength={6}
                  placeholder="example@mail.com"
                  required={true}
                />

                <div className={styles['button-wrapper']}>
                  <SubmitButton
                    disabled={isPending}
                    formId="JoinForm"
                    label="Submit"
                  />
                </div>
              </div>
            </form>
          </>
      }
    </div>
  );
}

function AlmostDone({ email }:{ email: string }) {
  return (
    <div className={styles['almost-done']}>
      <h1>Almost Done!</h1>
      <h2>Check your email</h2>
      <p>We sent you an email at
        <br />
        <span className={styles['email-sent-to']}>{email}</span>
        <br />
        Click the link to finish your registration
      </p>
    </div>
  );
}


export default JoinForm;
