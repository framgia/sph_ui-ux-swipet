import React from "react";
import FooterSection from "../components/FooterSection";
// import LogoRBrown from "../../../image/logoRBrown";

const AboutPage = () => {
  return (
    <div class="mx-auto bg-dark-light">
      <div class="flex justify-center max-w-[100px] sm:max-w-[1120px]">
        <img
          src="./images/logo_r_brown.svg"
          alt="logo_brown"
          className="logo-r-brown"
        />
      </div>
      <hr />
      <div class="flex justify-center">
        <div class="max-w-4xl">
          <h1 class="font-inter font-bold text-4xl text-brown-900 p-7">
            About Swipet
          </h1>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            Swipet is a mobile application that connects dogs (tinder pets) with
            their new forever homes. Swipet assured that finding a four-legged
            partner is quick, exciting, and addicting for pet lovers by
            combining strong location-based technology with the 'Swipe' user
            interface popularized by applications like Tinder.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            Swipet allows users to narrow down their search by pet breed, age,
            distance, category, and other factors. It also uses GPRS technology
            to automatically determine the user's exact location, guiding the
            user to the most appropriate furry companions in the area.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            The best aspect is that it is completely free, and we found it to be
            highly user-friendly. We created our user profile, received an
            email, and confirmed that we were not a robot in under five minutes.
            Then we were ready to log in and begin meeting one of the hundreds
            of pets available on the App.
          </p>
          <h2 class="font-inter font-semibold text-base text-brown-900 px-7 mb-4">
            Our mission
          </h2>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            To make advantage of the Internet and the resources it can generate
            to:
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            1. Raise public awareness of the availability of high-quality
            adopted pets.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            2. Increase the overall effectiveness of pet adoption programs to
            the point where adoptable pets are no longer euthanized and puppy
            mills are no longer operating.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            3. Encourage people to donate to shelters and to promote
            guardianship and kindness toward all living things.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            4. Pet owners can search for a pet that best suits their needs from
            the comfort of their smartphones to help get pets out of the
            shelters and into loving homes.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            The rising number of dogs, puppies, cats, and kittens rescued from
            pounds or surrendered directly is overwhelming many shelters. The
            sooner their profiles are seen by a larger audience, the better
            their chances of finding a good home become.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            It could save you a lot of time navigating the various websites of
            local rescue shelters or driving to a variety of locations only to
            discover that the dog or cat you adore is no longer available.
          </p>
          <h2 class="font-inter font-semibold text-base text-brown-900 px-7 mb-4">
            Disclaimer
          </h2>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-4">
            It's always a good idea to call the facility or organization that
            lists the pet to confirm that it's still available and that the
            information in Swipet is correct. It is critical that any pet
            obtained through an adoption service undergo a thorough examination
            by a veterinarian as soon as possible after adoption. The adoption
            organizations and/or the adopting party are solely responsible for
            any pets found, adopted through, or listed in Swipet.
          </p>
          <p class="font-inter  font-normal text-base text-brown-900 px-7 mb-32">
            Swipet disclaims any liability or responsibility for any injury or
            damage caused by any listed animal to any person or property, as
            well as any cause of action, claims, suits, or demands that may
            arise as a result of such injury or damage.
          </p>
        </div>
      </div>
      <hr />
      <div>
        <FooterSection />
      </div>
    </div>
  );
};

export default AboutPage;
