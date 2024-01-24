type ChildrenProp = {
  children: string;
};

export default function Heading({ children }: ChildrenProp) {
  return <h2>{children}</h2>;
}
