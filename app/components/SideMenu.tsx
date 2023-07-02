import { MouseEventHandler } from "react"
import {Link} from "react-scroll"
import {motion, AnimatePresence, Cycle} from "framer-motion"

type MenuToggleProps = {
    open: boolean,
    setOpen: MouseEventHandler<HTMLLIElement>
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    },
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const links = [
  { name: "Home", to: "home", id: 1 },
  { name: "About", to: "about", id: 2 },
  { name: "Work", to: "work", id: 3 },
  { name: "Contact", to: "contact", id: 4 }
];

const SideMenu = ({open, setOpen}: MenuToggleProps) => {
    return (
        <>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{
                x: "-10%"
            }}
            exit={{
              x: "-100%",
              transition: { delay: 0.7, duration: 0.3 }
            }}
            className="bg-slate-800 relative top-5 left-0 h-screen w-full"
          >
            <motion.ul
              className=" m-10 flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.li
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  onClick={setOpen}
                  className="text-white text-xl"
                >
                    <Link to={to} smooth={true} onClick={() => setOpen}>
                        <span onClick={setOpen}>{name}</span>
                    </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        )}
        </>
    );
}
 
export default SideMenu;