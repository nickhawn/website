export default function CoverImage({ title, src }) {
  return (
    <div className="mx-2 2xl:mx-72">
      <img src={src} alt={`Cover Image for ${title}`} />
    </div>
  );
}
