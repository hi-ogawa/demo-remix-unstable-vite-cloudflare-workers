import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";

export const loader: LoaderFunction = () => {
  return { SOME_VAR: env.SOME_VAR };
};

export default function Page() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <div>
      <h3>Vars Demo</h3>
      <pre>{JSON.stringify(loaderData)}</pre>
    </div>
  );
}
