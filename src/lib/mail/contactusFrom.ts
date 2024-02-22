export const sendContactusMessage = async (event: any) => {
  const formData = new FormData(event.target as HTMLFormElement);

  formData.append("access_key", "2ec64207-6d8b-4e43-aed2-f88946774177");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });
  return response;
};
