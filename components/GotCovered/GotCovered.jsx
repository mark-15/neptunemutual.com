import StarIcon from "@utils/icons/StarIcon";
import CautionIcon from "@utils/icons/CautionIcon";
import CreateIcon from "@utils/icons/CreateIcon";
import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";

const data = [
  {
    icon: <StarIcon className="w-10 h-10" />,
    title: <Trans>Receive Rewards</Trans>,
    description: (
      <Trans>
        Invest stablecoin liquidity to receive rewards and protect your favorite
        blockchain projects.
      </Trans>
    ),
    linkTo: "https://docs.neptunemutual.com/covers/liquidity-providers",
  },
  {
    icon: <CautionIcon className="w-10 h-10" />,
    title: <Trans>Get Protection</Trans>,
    description: (
      <Trans>
        Stay protected against exchange hacks &amp; dApp, DeFi, and smart
        contract exploits.
      </Trans>
    ),
    linkTo: "https://docs.neptunemutual.com/covers/purchasing-covers",
  },
  {
    icon: <CreateIcon className="w-10 h-10" />,
    title: <Trans>Create Covers</Trans>,
    description: (
      <Trans>
        Build a cover protection community for your protocol, exchange, or DeFi
        project.
      </Trans>
    ),
    linkTo: "https://docs.neptunemutual.com/covers/contract-creators",
  },
];

export const GotCoveredComponent = () => {
  return (
    <div className={styles.container}>
      <div className="section_horizontal_container">
        <div className="">
          <h1 className={styles.section_title}>
            <Trans>We&#x2019;ve Got You Covered</Trans>
          </h1>
          <h3 className={styles.section_desc}>
            <Trans>
              Get guaranteed payouts from our parametric cover model. Resolve
              incidents faster without the need for claims assessment.
            </Trans>
          </h3>
        </div>

        <div className={styles.cards_container}>
          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.card_icon_wrapper}>{item.icon}</div>
              <div className={styles.content_wrapper}>
                <h4 className={styles.card_title}>{item.title}</h4>
                <p className={styles.card_desc}>{item.description}</p>
                <a
                  href={item.linkTo}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card_link}
                >
                  <Trans>FIND OUT MORE</Trans>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
