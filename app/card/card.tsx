interface Tprops {
    name: string;
    rollno: number;
    day: string;
    class: string;
    section: string;
    group: string;
    profilePic: string;
  }
  
  const Card = (props: Tprops) => {
    return (
      <div
        className="bg-cover bg-center p-12 w-96 h-auto flex items-center border rounded shadow-black"
        style={{
          backgroundImage:
            'url("https://thumbs.dreamstime.com/b/blue-art-to-name-card-beautiful-background-to-make-name-card-id-card-blue-art-name-card-background-108022023.jpg")',
        }}
      >
        <div className="flex-shrink-0 mr-6">
          <img
            src={props.profilePic}
            alt="Student"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
  
        <div className="text-left">
          <h2 className="text-sm font-semibold">Name: {props.name}</h2>
          <h2 className="text-sm font-semibold">Roll No: {props.rollno}</h2>
          <h2 className="text-sm font-semibold">Day: {props.day}</h2>
          <h2 className="text-sm font-semibold">Class: {props.class}</h2>
          <h2 className="text-sm font-semibold">Section: {props.section}</h2>
          <h2 className="text-sm font-semibold">Group: {props.group}</h2>
        </div>
      </div>
    );
  };
  
  export default Card;
  