interface Statusprop {
  status: "loading" | "error" | "success";
}

export const Status = ({ status }: Statusprop) => {
  let message;
  if (status === "loading") {
    console.log("Loding....");
    message = "Loading...";
  } else if (status === "error") {
    console.log("error");
    message = "error";
  } else if (status === "success") {
    console.log("data fetched successfully");
    message = "data fetcheed successfully";
  }

  return <div>status:{message}</div>;
};
