const baseUrl = "http://localhost:5000";

export const getAll = async () => {
  let res = await fetch(`${baseUrl}/api/task`);
  console.log(res);
  return res || [];
};
