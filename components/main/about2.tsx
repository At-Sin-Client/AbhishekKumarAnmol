import Image from 'next/image';

const About2 = () => {
  return (
    <section id="about" className="relative bg-space-background py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 relative md:absolute md:top-0 md:left-0 md:h-full">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative w-full h-80 md:h-96 rounded-full overflow-hidden">
            <Image
              src="/main.png"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="object-center object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
          Abhishek Kumar Anmol started implementing his career with poetry in the form of nature,
justice, crime, the deep lesson given by the mother soul which vanishes early, and how to
sustain in this world. The book&apos;s name is-- A Fossil of Time, Dawn in the Day, An Echo of
Silence, The National Flames of Decades and an anthology that describes the lean down
and waves rising of the new day. A young enthusiast whose favourite field of profession
is the film industry. I started my studies at a film institute, with a passionate mind that
leans towards my goal in writing, acting, directing scriptwriting, plays etc. It has tended
him to show his talent in the writing world through a poetry book &apos;Fossil of Time
&apos;
.it is the
first stepping stone of life. He aspires to make a feature film. A soft thinker of society
towards helping poor, descendants to let them grow up. Through his writing, he always
conveys a positive happening in our society. The poem tells a deep notion of time,
showing poverty, nationhood, and a brotherhood that binds every person in our society.
The patriotism that can connect every heart, the poverty that makes a person beg. I
always dedicated my life to my mother they are not alive in this world but they give a
huge amount of blessing. Can I pay my life to his soul and always feel happy?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About2;
