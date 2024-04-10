export default async function Page() {
  await new Promise((r) => setTimeout(r, 2000));
  return <div>Dashboard page</div>;
}
