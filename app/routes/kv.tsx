import { Form, useLoaderData } from "@remix-run/react";
import { ActionFunctionArgs, json } from "@remix-run/server-runtime";

const kvKey = "counter";

export async function loader() {
  const value = await env.kv.get(kvKey);
  return json({ value: Number(value) });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const delta = Number(formData.get("delta"));
  const value = await env.kv.get(kvKey);
  await env.kv.put(kvKey, String(Number(value) + delta));
  return json(null);
}

export default function CounterRoute() {
  const { value } = useLoaderData<typeof loader>();
  return (
    <div>
      <h2>KV Demo</h2>
      <pre>counter = {value}</pre>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Form method="POST">
          <input name="delta" value="-1" type="hidden" />
          <button value="-1" onClick={() => {}}>
            -1
          </button>
        </Form>
        <Form method="POST">
          <input name="delta" value="+1" type="hidden" />
          <button onClick={() => {}}>+1</button>
        </Form>
      </div>
    </div>
  );
}
