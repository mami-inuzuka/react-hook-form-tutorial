import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: 'Taro',
      lastName: 'Yamada',
    },
  });
  console.log(errors);
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register('firstName', { required: 'This is required.' })} placeholder="FirstName" />
        <p>{errors.firstName?.message}</p>
        <input
          {...register('lastName', {
            required: 'This is required.',
            minLength: {
              value: 4,
              message: 'Min Length is 4.',
            },
          })}
          placeholder="LastName"
        />
        <p>{errors.lastName?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
