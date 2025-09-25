// Soll eine Card zurückgeben
// von Daisy UI

const DestinationCard = ({ destination }) => {
  const { id, image, title, description } = destination;

  console.log("id; ", id, "  image: ", image);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default DestinationCard;
/*
<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>
      A card component has a figure, a body part, and inside body there are
      title and actions parts
    </p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>;
*/
