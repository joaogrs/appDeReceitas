const getEmailLocalStorage = () => {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return email;
};

export default getEmailLocalStorage;
