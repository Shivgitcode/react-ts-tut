type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, handleChange }: InputProps) {
  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
}
