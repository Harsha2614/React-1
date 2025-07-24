import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { links, social } from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, sidebarRef } = useGlobalContext();

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}
    >
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
