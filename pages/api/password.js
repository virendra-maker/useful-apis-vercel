export default function handler(req, res) {
  const { length = 16, numbers = 'true', symbols = 'true' } = req.query;
  
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numSet = "0123456789";
  const symSet = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  let characters = charset;
  if (numbers === 'true') characters += numSet;
  if (symbols === 'true') characters += symSet;
  
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  res.status(200).json({ password });
}
