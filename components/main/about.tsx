import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-space-background bg-slate-200 flex flex-col py-20 px-2 gap-10 md:px-4 lg:px-12">
        <div className='flex flex-col items-center justify-center'>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ff545d]  mb-4">ABOUT ME</h2></div>
      <div className="max-w-5xl mx-auto flex flex-col gap-20 md:flex-row  justify-center space-y-8 md:space-y-0">
      
        <div className="w-full  md:w-1/2 justify-center">
        
          <div className="relative   h-80 md:h-96 rounded-full overflow-hidden">
            <Image
              src="/main.png"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="object-center object-cover bg-black"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          <p className="md:text-lg text-base text-black leading-relaxed">
          Abhishek Kumar Anmol started implementing his career with poetry in the form of nature,
justice, crime, the deep lesson given by the mother soul which vanishes early, and how to
sustain in this world. The book's name is-- A Fossil of Time, Dawn in the Day, An Echo of
Silence, The National Flames of Decades and an anthology that describes the lean down
and waves rising of the new day. A young enthusiast whose favourite field of profession
is the film industry. I started my studies at a film institute, with a passionate mind that
leans towards my goal in writing, acting, directing scriptwriting, plays etc. It has tended
him to show his talent in the writing world through a poetry book “Fossil of Time
”
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

export default About;
