import React from "react";
import AvailableJobCard from "../../../components/AvailableJobCard";

const JobSection = () => {
  const cards = [
    {
      title: "Vintage Pocket Watch",
      description:
        "This antique pocket watch dates back to the early 1900s and exudes a timeless elegance. Crafted from polished silver with intricate engravings on its casing, it features Roman numeral markers on a pristine white face. The watch is encased in a velvet-lined box, complete with delicate filigree hinges, making it a cherished piece for collectors and enthusiasts of horology.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFL1cR62lIYsIb3F90dr42W4nXBByl57R6SiT5ALkI4iF_ToQkRyQ96f-jkqYXUoi_Bfs&usqp=CAU",
    },
    {
      title: "Handcrafted Leather Journal",
      description:
        "A handcrafted leather journal that captures the essence of artisanal craftsmanship. Made from supple, vegetable-tanned leather, the cover is embossed with a Celtic knot design, symbolizing eternity and interconnectedness. Inside, the pages are hand-sewn with archival-quality paper, perfect for sketching, writing, or preserving thoughts and memories. This journal is a testament to meticulous attention to detail and makes a thoughtful gift for writers and creatives.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexlm5bNLIvNQV16J3l4ZFoB7ntMatPiNfUFF2E5H1mm-4N4-qrnA1F62cYhZTjI6r6FI&usqp=CAU",
    },
    {
      title: "Porcelain Tea Set",
      description:
        "This porcelain tea set epitomizes refinement and elegance. Delicately hand-painted with floral motifs in soft pastel hues, each piece—teapot, cups, and saucers—bears a distinctive charm. The teapot, adorned with a gracefully curved spout and handle, pours tea smoothly into matching cups, which rest on saucers adorned with gilded edges. Ideal for afternoon tea gatherings, this set brings a touch of sophistication to any occasion.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZznbKM7nFB-Gd28zY_VPE1nr2Bd-Bk5cHyRVPktx1aM6A5tdTL03HsrABShMVi6dpqrA&usqp=CAU",
    },
    {
      title: "Antique Typewriter",
      description:
        "An antique typewriter that transports you to a bygone era of literary craftsmanship. Crafted from cast iron and steel, this Remington Standard No. 7 typewriter features a QWERTY keyboard with rounded keys and a sturdy frame. Each keystroke resonates with the mechanical rhythm of its time, making it a nostalgic piece for writers and collectors alike.",
      imageUrl:
        "https://www.aihr.com/wp-content/uploads/hiring-manager-cover.jpg",
    },
  ];
  return (
    <div>
      <div className="my-4 text-center">
        <h3 className="font-bold text-4xl">Available Jobs </h3>
      </div>
      <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards &&
          cards.map((card, index) => {
            return <AvailableJobCard key={index} card={card} />;
          })}
      </div>
    </div>
  );
};

export default JobSection;
