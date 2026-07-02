import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.png";
export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-y-20 text-lg items-center">
      <div className="flex flex-col-reverse md:flex-row gap-x-16 gap-y-12 xl:gap-x-24 items-center">
        <div className="w-[100%] md:w-[50%] xl:w-[65%]">
          <h1 className="text-3xl md:text-4xl mb-10 text-accent-400 font-medium">
            Welcome to The Wild Oasis
          </h1>

          <div className="text-sm sm:text-base space-y-8">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </p>
            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you&apos;ll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and watch the
              stars twinkle above from the warmth of a campfire or your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] xl:w-[35%]">
          <Image
            src={about1}
            alt="Family sitting around a fire pit in front of cabin"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="block sm:hidden w-full h-[1px] bg-[#D4DEE7]"></div>
      <div className="flex flex-col md:flex-row  gap-x-16 gap-y-12 xl:gap-x-24">
        <div>
          <Image
            src={about2}
            alt="Family that manages The Wild Oasis"
            placeholder="blur"
          />
        </div>
        <div>
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            A Place to Slow Down Since 1962
          </h1>

          <div className="text-sm sm:text-base space-y-8">
            <p>
              Since 1962, The Wild Oasis has been a peaceful escape for those
              seeking quiet moments surrounded by nature. Tucked away in the
              heart of the mountains, our cabins offer the perfect setting to
              disconnect from the noise of everyday life and reconnect with what
              truly matters.
            </p>
            <p>
              Whether you&apos;re sitting by the fire, breathing in the fresh
              mountain air, or simply enjoying the silence, every moment at The
              Wild Oasis is designed to bring comfort, clarity, and relaxation.
              Come experience a place where solitude feels like home and every
              stay leaves you refreshed.
            </p>

            <div>
              <a
                href="/cabins"
                className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
              >
                Explore our luxury cabins
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
