type PropTypes = {
  imageUrl: string;
  width?:string;
  height?:string;
};

export default function Avatar({ imageUrl, height, width }: PropTypes) {
  return (
    <div className="avatar p-4">
      <div className={`w-${width} h-${height} rounded-full`}>
        <img height={height} width={width} src={imageUrl} />
      </div>
    </div>
  );
}
