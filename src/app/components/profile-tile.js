import React from "react";
import { Lightbulb, Mail} from 'lucide-react';

export default function ProfileTile() {
  return (
    <div className="profile-tile">
      <div className="avatar">
        <img src="/profile-pic.jpg" alt="Avatar" />
      </div>
      <div className="text-container">
        <div className="name">Rahul Madhugiri</div>
        <div className="title">Form meets Function. Strategy meets Clarity.</div>
        <div className="tagline-icons">
          <img src="/LinkedIn_icon.svg.png" alt="Icon 1" className="tagline-icon" />
          <img src="/dynr-logo.png" alt="Icon 2" className="tagline-icon" />
          <img src="/omnino-logo.png" alt="Icon 3" className="tagline-icon" />
          <Lightbulb size={22} color={"#5e5e5e"} />
          <Mail size={22} color={"#5e5e5e"} />


        </div>
      </div>
      <div className="trailing-container">
        {/* You can add slots or other trailing elements here if needed */}
      </div>
    </div>
  );
}