import ProfileCard from "@/src/blocks/Components/ProfileCard/ProfileCard";

const Team = () => {
  return (
    <section>
      <ProfileCard
        name="Akhdan Anargya Arisadi"
        title="Software Engineer"
        handle="akhdanrgya"
        status="Online"
        contactText="Contact Me"
        avatarUrl="images/icon.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </section>
  );
};

export default Team;
