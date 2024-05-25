export default function Card({ children, imgSrc, imgAlt, ...props }) {
  return (
    <div
      {...props}
      className="bg-slate-100 grid grid-cols-1 rounded-2xl shadow-lg group"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className="rounded-md rounded-b-none transition-transform group-hover:scale-110 duration-0"
      />
      <div className="my-2 p-4 text-slate-900 break-all">{children}</div>
    </div>
  );
}