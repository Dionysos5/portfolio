import React from "react";
import Image from "next/image";
import ProfilePicture from "../components/profile.png";

export default function About() {
  return (
    <main>
      <Image src={ProfilePicture} alt="Profile picture" width={200} />
      <div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse in est ante in. Hendrerit dolor magna eget est lorem ipsum
          dolor sit. Feugiat in fermentum posuere urna nec. Nibh cras pulvinar
          mattis nunc.
        </p>
        <p>
          Auctor neque vitae tempus quam pellentesque nec nam aliquam. Nunc
          consequat interdum varius sit amet mattis vulputate enim nulla. Aenean
          pharetra magna ac placerat vestibulum lectus mauris ultrices. Ac orci
          phasellus egestas tellus rutrum tellus. Pellentesque pulvinar
          pellentesque habitant morbi tristique senectus et. Proin libero nunc
          consequat interdum varius sit amet. Egestas fringilla phasellus
          faucibus scelerisque eleifend donec pretium. Volutpat blandit aliquam
          etiam erat velit scelerisque in. At in tellus integer feugiat
          scelerisque varius morbi. Pellentesque id nibh tortor id aliquet.
          Ultrices tincidunt arcu non sodales neque sodales ut. In nisl nisi
          scelerisque eu ultrices vitae. Commodo ullamcorper a lacus vestibulum
          sed arcu non odio. Aliquet nibh praesent tristique magna sit. Ac
          auctor augue mauris augue neque gravida in fermentum. Vehicula ipsum a
          arcu cursus.
        </p>
        <p>
          Dolor sit amet consectetur adipiscing elit. Sit amet justo donec enim
          diam vulputate. Proin fermentum leo vel orci. Urna cursus eget nunc
          scelerisque viverra mauris. Cursus sit amet dictum sit. Pretium aenean
          pharetra magna ac. Viverra ipsum nunc aliquet bibendum enim facilisis
          gravida neque convallis. Ipsum faucibus vitae aliquet nec ullamcorper
          sit amet risus. Vitae nunc sed velit dignissim sodales.
        </p>
      </div>
    </main>
  );
}
