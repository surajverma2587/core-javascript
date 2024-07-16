export const sanitize = (email) => {
  return email.trim().toLowerCase();
};

export const formatAddress = (address) => {
  if (!address.secondLine) {
    return `${address.firstLine}, ${address.city}, ${address.state}, ${address.zip}`;
  }

  return `${address.firstLine}, ${address.secondLine}, ${address.city}, ${address.state}, ${address.zip}`;
};
