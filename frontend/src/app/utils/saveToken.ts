export const saveToken = (aToken: string, exp: number) => {
  const aTokendate = new Date(0);
  aTokendate.setUTCSeconds(exp);

  document.cookie = `aToken=${aToken}; expires=${aTokendate}; path=/; SameSite=Lax; Secure`;
};

export const getAToken = () => {
  return document.cookie
    .split('; ')
    .find((c) => {
      return c.startsWith('aToken=');
    })
    ?.split('=')[1];
};

export const removeToken = () => {
  document.cookie = `aToken=; max-age=0`;
};
