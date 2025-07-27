export const escapeInput = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export const containsDangerousInput = (text: string) => {
  const lower = text.toLowerCase();
  return /<script.*?>.*?<\/script>/g.test(lower) || /on\w+=".*?"/g.test(lower);
};
