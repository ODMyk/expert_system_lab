import { ClassType } from "./ClassType";
import { RelationshipType } from "./RelationshipType";

interface Relationship {
  from: ClassType;
  to: ClassType;
  type: RelationshipType;
}

export const RELATIONSHIPS: Relationship[] = [
  {
    from: ClassType.Amphibian,
    to: ClassType.Animal,
    type: RelationshipType.Is,
  },
  {
    from: ClassType.Animal,
    to: ClassType.LivingBeing,
    type: RelationshipType.Is,
  },
  { from: ClassType.Bird, to: ClassType.Animal, type: RelationshipType.Is },
  { from: ClassType.Bush, to: ClassType.Plant, type: RelationshipType.Is },
  { from: ClassType.Cat, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Dog, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Eagle, to: ClassType.Bird, type: RelationshipType.Is },
  { from: ClassType.Fish, to: ClassType.Animal, type: RelationshipType.Is },
  {
    from: ClassType.FloweringPlant,
    to: ClassType.Plant,
    type: RelationshipType.Is,
  },
  { from: ClassType.Horse, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Human, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Husky, to: ClassType.Dog, type: RelationshipType.Is },
  { from: ClassType.Insect, to: ClassType.Animal, type: RelationshipType.Is },
  { from: ClassType.Mammal, to: ClassType.Animal, type: RelationshipType.Is },
  { from: ClassType.Poodle, to: ClassType.Dog, type: RelationshipType.Is },
  { from: ClassType.Penguin, to: ClassType.Bird, type: RelationshipType.Is },
  {
    from: ClassType.Plant,
    to: ClassType.LivingBeing,
    type: RelationshipType.Is,
  },
  {
    from: ClassType.Rose,
    to: ClassType.FloweringPlant,
    type: RelationshipType.Is,
  },
  { from: ClassType.SphynxCat, to: ClassType.Cat, type: RelationshipType.Is },
  { from: ClassType.Tiger, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Tree, to: ClassType.Plant, type: RelationshipType.Is },

  { from: ClassType.Bone, to: ClassType.Animal, type: RelationshipType.PartOf },
  { from: ClassType.Head, to: ClassType.Animal, type: RelationshipType.PartOf },
  { from: ClassType.Paw, to: ClassType.Mammal, type: RelationshipType.PartOf },
  { from: ClassType.Tail, to: ClassType.Dog, type: RelationshipType.PartOf },
  { from: ClassType.Wing, to: ClassType.Bird, type: RelationshipType.PartOf },
  { from: ClassType.Beak, to: ClassType.Bird, type: RelationshipType.PartOf },
  { from: ClassType.Root, to: ClassType.Plant, type: RelationshipType.PartOf },
  { from: ClassType.Leaf, to: ClassType.Plant, type: RelationshipType.PartOf },
  {
    from: ClassType.Petal,
    to: ClassType.FloweringPlant,
    type: RelationshipType.PartOf,
  },
  { from: ClassType.Thorn, to: ClassType.Rose, type: RelationshipType.PartOf },
  { from: ClassType.Bush, to: ClassType.Plant, type: RelationshipType.Is },

  {
    from: ClassType.Mammal,
    to: ClassType.Fur,
    type: RelationshipType.HasProperty,
  },
  {
    from: ClassType.Bird,
    to: ClassType.Feather,
    type: RelationshipType.HasProperty,
  },

  {
    from: ClassType.SphynxCat,
    to: ClassType.Fur,
    type: RelationshipType.Exception,
  },
];
