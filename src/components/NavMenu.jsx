import React from 'react';
import { MoreVertical, Upload, ShieldCheck, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        aria-label="Menu"
        onClick={() => setOpen((s) => !s)}
        className="rounded-full p-2 border/50 border bg-white/5 hover:bg-white/10 transition"
        style={{ color: '#FFFFE3', borderColor: 'rgba(255,255,255,0.28)' }}
      >
        <MoreVertical className="size-5" />
      </button>

      {open && (
        <div
          className="mt-2 w-48 rounded-xl overflow-hidden border backdrop-blur-md"
          style={{
            background: 'rgba(255,255,255,0.06)',
            borderColor: 'rgba(255,255,255,0.28)',
            boxShadow: '0 10px 24px rgba(0,0,0,0.28)'
          }}
        >
          <nav className="py-1" style={{ color: '#FFFFE3' }} onClick={() => setOpen(false)}>
            <Link to="/upload" className="flex items-center gap-2 px-3 py-2 hover:bg-white/10"><Upload className="size-4" /> Upload</Link>
            <Link to="/verify" className="flex items-center gap-2 px-3 py-2 hover:bg-white/10"><ShieldCheck className="size-4" /> Verify</Link>
            <Link to="/login" className="flex items-center gap-2 px-3 py-2 hover:bg-white/10"><LogIn className="size-4" /> Login</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
