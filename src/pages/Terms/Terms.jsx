import { Link } from "react-router-dom";
import { Button } from "../../components";
import "./styles.css";

const Terms = () => {
  const terms = [
    {
      id: 1,
      title: "1. Introduction",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 2,
      title: "2. User Terms",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 3,
      title: "3. Condition of Use",
      text: "",
      subtitle1: "REGISTRATION",
      subtitle2: "Dspatch SERVICES",
      subtitle3: "RATING",
      subtitle4: "CANCELATION AND REFUND",
      subtitle5: "RETURN OF GOODS",
      subtitle6: "COMPLAINTS",
      subtitle7: "PICK-UP AND DROP-OFF SERVICES",
      subtext1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext5:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext6:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext7:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
    },

    {
      id: 4,
      title: "4. General Terms",
      text: "",
      subtitle1: "ELIGIBILITY OF USE",
      subtitle2: "USER ACCOUNT, PASSWORD AND SECURITY",
      subtitle3: "REPRESENTATION AND WARRANTIES",
      subtitle4: "DISCLAIMER OF WARRANTIES AND LIABILITY",
      subtitle5: "INDEMNIFICATION AND LIMITATION OF RELIABILITY",
      subtitle6: "COMPLAINTS",
      subtitle7: "PICK-UP AND DROP-OFF SERVICES",
      subtext1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext5:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext6:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtext7:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
    },

    {
      id: 5,
      title: "5. User Information",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 6,
      title: "6. Payment",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 7,
      title: "7. Lost Property",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 8,
      title: "8. Intellectual Property",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 9,
      title: "9. Severability",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 10,
      title: "10. Termination",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 11,
      title: "11. Full Agreement",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 12,
      title: "12. Law",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 13,
      title: "13. Dispute Resolution",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 14,
      title: "14. Electronic Communication and General Notifications",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 15,
      title: "15. Link to Other Websites",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 16,
      title: "16. Changes to Terms of Service",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },

    {
      id: 17,
      title: "17. Contact Information",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus et blanditiis veritatis voluptas, ipsa ab assumenda ipsum, corrupti illo vero magnam? Et nemo asperiores cum perferendis repudiandae quaerat eveniet quis, incidunt iure ipsa, placeat ex ut eum laudantium eius molestiae sequi veniam maiores, voluptatem aliquid sit nesciunt? Quasi cupiditate iste quis, vel laudantium accusantium repellat libero neque hic non! Possimus assumenda minima ea exercitationem perspiciatis iusto sed dolores nulla dolorum explicabo soluta deserunt quod, vero laborum culpa optio? Mollitia in eligendi, sunt officia quasi ad corrupti, deserunt fuga non quia, optio sit? Incidunt quo id, sint tempora minus debitis!",
      subtitle1: "",
      subtitle2: "",
      subtitle3: "",
      subtitle4: "",
      subtitle5: "",
      subtitle6: "",
      subtitle7: "",
      subtext1: "",
      subtext2: "",
      subtext3: "",
      subtext4: "",
      subtext5: "",
      subtext6: "",
      subtext7: "",
    },
  ];

  const Signup = () => {
    return (
      <div className='p-4 signup--box'>
        <p>Find support for your bookings, account and other issues</p>
        <div className='text-center signup--btn'>
          <Button className='bttn'>
            <Link href='/'>Log in or Sign up</Link>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='terms--title'>
        <h6>LEGAL AGREEMENT</h6>
        <h1>TERMS & CONDITIONS</h1>
        <h6>Last Updated: January 10, 2023</h6>
      </div>

      {/* Table of content */}
      <div className='container d-block d-sm-flex justify-content-between'>
        <div>
          <h2 className='mb-4'>TABLE OF CONTENT</h2>
          {terms.map((list) => (
            <div className='terms--list' key={list.id}>
              <li>{list.title}</li>
            </div>
          ))}
        </div>
        <Signup />
      </div>

      <div className='container terms--content'>
        <div>
          {terms.map((ls) => (
            <div className='mb-5' key={ls.id}>
              <h2 className='text-uppercase mb-3'>{ls.title}</h2>
              <h3>{ls.subtitle1}</h3>
              <p>{ls.subtext1}</p>
              <h3>{ls.subtitle2}</h3>
              <p>{ls.subtext2}</p>
              <h3>{ls.subtitle3}</h3>
              <p>{ls.subtext3}</p>
              <h3>{ls.subtitle4}</h3>
              <p>{ls.subtext4}</p>
              <h3>{ls.subtitle5}</h3>
              <p>{ls.subtext5}</p>
              <h3>{ls.subtitle6}</h3>
              <p>{ls.subtext6}</p>
              <h3>{ls.subtitle7}</h3>
              <p>{ls.subtext7}</p>
              <div>
                <p>{ls.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
