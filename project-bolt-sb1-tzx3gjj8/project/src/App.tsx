import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <header className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Project Board
        </h1>
      </div>
    </header>
  );
};

// Card Component
const Card = ({ title }: { title: string }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200 hover:border-gray-300 group">
      <div className="flex items-start justify-between">
        <p className="text-sm text-gray-800 font-medium leading-relaxed flex-1">
          {title}
        </p>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

// Column Component
const Column = ({ title, cards }: { title: string; cards: string[] }) => {
  return (
    <div className="bg-slate-100 rounded-xl p-4 w-80 flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">
          {title}
        </h3>
        <span className="bg-slate-200 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">
          {cards.length}
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        {cards.map((card, index) => (
          <Card key={index} title={card} />
        ))}
      </div>
      
      <button className="w-full p-3 text-left text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm font-medium">
        <Plus className="w-4 h-4" />
        Add a card
      </button>
    </div>
  );
};

// Board Component
const Board = () => {
  const columns = [
    {
      title: 'To Do',
      cards: ['Design new landing page', 'Set up project repository']
    },
    {
      title: 'In Progress', 
      cards: ['Implement user authentication', 'Create responsive navigation']
    },
    {
      title: 'Done',
      cards: ['Research competitor analysis', 'Define project requirements']
    }
  ];

  return (
    <main className="flex-1 p-6 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 pb-6">
          {columns.map((column, index) => (
            <Column 
              key={index}
              title={column.title}
              cards={column.cards}
            />
          ))}
          
          <button className="bg-slate-700/50 hover:bg-slate-700/70 border-2 border-dashed border-slate-600 hover:border-slate-500 rounded-xl p-4 w-80 flex-shrink-0 transition-all duration-200 flex items-center justify-center gap-2 text-slate-400 hover:text-slate-300">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Add another list</span>
          </button>
        </div>
      </div>
    </main>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <Header />
      <Board />
    </div>
  );
}

export default App;