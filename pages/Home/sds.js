const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    try {
      const schema = Joi.object({
        email: Joi.string()
          .email({
            tlds: { allow: false },
          })
          .required(),
        password: Joi.string().min(6).max(30).required(),
      });
      const { error } = schema.validate({ email, password });
      if (error) {
        setErrors({
          ...errors,
          email: error.details[0].message,
        });
        return;
      }
      const response = await axios.post('https://api.example.com/login', {
        email,
        password,
      });
      const userData = postResponse.data.user;
      if (userData) {
        // Navigate to the Dashboard page using the router
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
