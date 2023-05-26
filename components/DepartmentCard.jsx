import Image from 'next/image';
import Link from 'next/link';
function DepartmentCard(props) {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12 p-1 mx-2"
      style={{ width: '18rem' }}
    >
      <img className="card-img-top my-1" src={props.src} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title fw-bold my-2 ">{props.title}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          facere quis, quidem suscipit quibusdam consequuntur?
        </p>
        <Link href="#" className="btn btn-primary w-auto">
          Details
        </Link>
      </div>
    </div>
  );
}

export default DepartmentCard;
