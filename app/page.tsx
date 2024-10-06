import Card from "./card/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-italic mb-8 text-blue-900 font-serif">
        Student I'D Cards
      </h1>

      <Card
        name="Hania"
        rollno={9876}
        class="9th"
        section="C"
        group="Commerce"
        day="Monday"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3fw-6itilhqMfWao69syYXFzH6FKUX_KLQ&s"
      />
      <br />
      <Card
        name="Wania"
        rollno={6779}
        class="8th"
        section="A"
        group="Science"
        day="Monday"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9C1Oh89hRP9MMBC-LsNRp3eVbU4OiauLDg&s"
      />
      <br />
      <Card
        name="Humema"
        rollno={5674}
        class="7th"
        section="B"
        group="Engineering"
        day="Monday"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ69gUrJgJ3LEmMZmWUprFxulVmT5OohLoA&s"
      />
    </div>
  );
}
