interface ChildrenProp {
  children?: React.ReactNode;
}

export default function Oscar({ children }: ChildrenProp) {
  return <div>{children}</div>;
}
