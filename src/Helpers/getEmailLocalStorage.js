const getEmailLocalStorage = () => {
  const emailLocalStorage = JSON.parse(localStorage.getItem('user'));
  if (!emailLocalStorage) {
    return '';
  }
  const { email } = emailLocalStorage;
  return email;
};

export default getEmailLocalStorage;
