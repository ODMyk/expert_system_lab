import { ClassType } from "./ClassType";
import { RelationshipType } from "./RelationshipType";

interface Relationship {
  from: ClassType;
  to: ClassType;
  type: RelationshipType;
}

export const RELATIONSHIPS: Relationship[] = [
  // --- IS RELATIONS: HIERARCHY & IMPLEMENTATIONS ---

  {
    from: ClassType.Animal,
    to: ClassType.LivingBeing,
    type: RelationshipType.Is,
  },
  { from: ClassType.Mammal, to: ClassType.Animal, type: RelationshipType.Is },
  { from: ClassType.Dog, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Husky, to: ClassType.Dog, type: RelationshipType.Is },
  { from: ClassType.Poodle, to: ClassType.Dog, type: RelationshipType.Is },

  {
    from: ClassType.Plant,
    to: ClassType.LivingBeing,
    type: RelationshipType.Is,
  },
  {
    from: ClassType.FloweringPlant,
    to: ClassType.Plant,
    type: RelationshipType.Is,
  },
  {
    from: ClassType.Rose,
    to: ClassType.FloweringPlant,
    type: RelationshipType.Is,
  },
  {
    from: ClassType.Orchid,
    to: ClassType.FloweringPlant,
    type: RelationshipType.Is,
  },
  { from: ClassType.Tree, to: ClassType.Plant, type: RelationshipType.Is },
  { from: ClassType.Bush, to: ClassType.Plant, type: RelationshipType.Is },

  { from: ClassType.OakTree, to: ClassType.Tree, type: RelationshipType.Is },
  { from: ClassType.PineTree, to: ClassType.Tree, type: RelationshipType.Is },

  { from: ClassType.RoseBush, to: ClassType.Bush, type: RelationshipType.Is },
  { from: ClassType.LilacBush, to: ClassType.Bush, type: RelationshipType.Is },

  { from: ClassType.Cat, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Tiger, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Horse, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.Human, to: ClassType.Mammal, type: RelationshipType.Is },
  { from: ClassType.SphynxCat, to: ClassType.Cat, type: RelationshipType.Is },
  { from: ClassType.MaineCoon, to: ClassType.Cat, type: RelationshipType.Is },

  { from: ClassType.Bird, to: ClassType.Animal, type: RelationshipType.Is },
  { from: ClassType.Fish, to: ClassType.Animal, type: RelationshipType.Is },
  {
    from: ClassType.Amphibian,
    to: ClassType.Animal,
    type: RelationshipType.Is,
  },
  { from: ClassType.Insect, to: ClassType.Animal, type: RelationshipType.Is },

  { from: ClassType.Eagle, to: ClassType.Bird, type: RelationshipType.Is },
  { from: ClassType.Penguin, to: ClassType.Bird, type: RelationshipType.Is },

  // --- PART OF RELATIONS (Частини тіла) ---

  { from: ClassType.Head, to: ClassType.Animal, type: RelationshipType.PartOf },
  { from: ClassType.Bone, to: ClassType.Animal, type: RelationshipType.PartOf },

  { from: ClassType.Paw, to: ClassType.Mammal, type: RelationshipType.PartOf },
  { from: ClassType.Tail, to: ClassType.Mammal, type: RelationshipType.PartOf },

  { from: ClassType.Wing, to: ClassType.Bird, type: RelationshipType.PartOf },
  { from: ClassType.Beak, to: ClassType.Bird, type: RelationshipType.PartOf },

  { from: ClassType.Fin, to: ClassType.Fish, type: RelationshipType.PartOf },

  { from: ClassType.Root, to: ClassType.Plant, type: RelationshipType.PartOf },
  { from: ClassType.Leaf, to: ClassType.Plant, type: RelationshipType.PartOf },

  {
    from: ClassType.Petal,
    to: ClassType.FloweringPlant,
    type: RelationshipType.PartOf,
  },

  { from: ClassType.Thorn, to: ClassType.Rose, type: RelationshipType.PartOf },

  // --- HAS PROPERTY RELATIONS (Властивості покриву) ---

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
    from: ClassType.Fish,
    to: ClassType.Scale,
    type: RelationshipType.HasProperty,
  },

  {
    from: ClassType.Insect,
    to: ClassType.Exoskeleton,
    type: RelationshipType.HasProperty,
  },

  // --- EXCEPTION RELATIONS ---

  {
    from: ClassType.Human,
    to: ClassType.Paw,
    type: RelationshipType.Exception,
  },
  {
    from: ClassType.Human,
    to: ClassType.Fur,
    type: RelationshipType.Exception,
  },

  {
    from: ClassType.SphynxCat,
    to: ClassType.Fur,
    type: RelationshipType.Exception,
  },
];
