const IP = 'test-task.shtrafovnet.com';
const PORT = '443';

export const getFine = async (UIN: string) => {
  const url = `https://${IP}:${PORT}/fines/${UIN}`;

  const response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    if (response.status === 404) return false;
    if (response.status === 500) return null;

    return false;
  }
};
