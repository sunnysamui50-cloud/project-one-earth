"use client";

import { useState } from "react";

type Node = {
  title: string;
  children?: Node[];
};

const map: Node = {
  title: "PROJECT ONE EARTH",
  children: [
    { title: "Administration & Justice", children: [
      { title: "Law & constitutional design" },
      { title: "Courts & mediation" },
      { title: "Public safety" },
      { title: "Civil administration" },
    ]},
    { title: "Health & Wellbeing", children: [
      { title: "Physical health & medicine" },
      { title: "Mental health" },
      { title: "Social care & disability" },
      { title: "Emergency care" },
    ]},
    { title: "Education & Development", children: [
      { title: "Early childhood" },
      { title: "Schools & teachers" },
      { title: "Higher & vocational education" },
      { title: "Lifelong learning" },
    ]},
    { title: "Economy & Material Security", children: [
      { title: "Production & work" },
      { title: "Distribution & universal provision" },
      { title: "Ownership & rent" },
      { title: "Professional communities" },
    ]},
    { title: "AI, Information & Knowledge", children: [
      { title: "Personal AI & informational sovereignty" },
      { title: "Data governance" },
      { title: "Research & knowledge" },
      { title: "AI accountability" },
    ]},
    { title: "Environment & Planetary Stewardship", children: [
      { title: "Food & agriculture" },
      { title: "Energy & climate" },
      { title: "Natural systems" },
      { title: "Long-horizon stewardship" },
    ]},
    { title: "Infrastructure & Technology", children: [
      { title: "Housing & construction" },
      { title: "Engineering & manufacturing" },
      { title: "Transport & mobility" },
      { title: "Digital infrastructure" },
    ]},
    { title: "Culture & Community", children: [
      { title: "Identity & belonging" },
      { title: "Cities & communities" },
      { title: "Culture & expression" },
      { title: "Social relationships" },
    ]},
    { title: "Research, Futures & Synthesis", children: [
      { title: "The nine-paper architecture" },
      { title: "The One Earth Synthesis" },
      { title: "Long-horizon futures" },
      { title: "Open questions" },
    ]},
  ],
};

function Branch({ node, depth = 0 }: { node: Node; depth?: number }) {
  const [open, setOpen] = useState(depth === 0);
  const hasChildren = Boolean(node.children?.length);

  return (
    <div className={`map-node depth-${depth}`}>
      <button className="node-button" onClick={() => hasChildren && setOpen(!open)} aria-expanded={hasChildren ? open : undefined}>
        <span>{node.title}</span>
        {hasChildren && <span className="node-toggle">{open ? "−" : "+"}</span>}
      </button>
      {open && node.children && (
        <div className="children">
          {node.children.map((child) => (
            <Branch key={child.title} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MindMap() {
  return (
    <div className="mind-map" aria-label="Project One Earth knowledge map">
      <Branch node={map} />
    </div>
  );
}
