export default function CoverImage({ title, src }) {
  return (
    <div className="sm:mx-0">
      <img src={src} alt={`Cover Image for ${title}`} />
    </div>
  );
}
