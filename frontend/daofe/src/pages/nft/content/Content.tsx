import { HexString } from '@polkadot/util/types';
import { useAccount } from '@gear-js/react-hooks';
import { Button } from '@gear-js/ui';
import clsx from 'clsx';
import { Addresses } from '../addresses';
import { Attributes } from '../attributes';
import { Card } from '../card';
import styles from './Content.module.scss';

type Props = {
  heading: string;
  image: string;
  ownerId: HexString;
  description: string;
  approvedAccounts: HexString[];
  rarity?: string;
  extdata: Record<string, string>;
  attributes?: { [key: string]: string };
  onTransferButtonClick: () => void;
  onApproveButtonClick: () => void;
  onPlayGameButtonClick: () => void;
  onRevokeButtonClick: (address: HexString) => void;
};

function Content(props: Props) {
  const { heading, image, ownerId, description, approvedAccounts, extdata, attributes, onPlayGameButtonClick, onTransferButtonClick, onApproveButtonClick, onRevokeButtonClick } = props;

  const { account } = useAccount();
  const isOwner = account?.decodedAddress === ownerId;
  const isAnyApprovedAccount = !!approvedAccounts.length;

  const detailsClassName = clsx(styles.main, styles.details);

  console.log('image===',image);
console.log('extdata===',extdata);
  return (
    <>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.main}>
        <section>
          <div className={styles.imgCard}>
            <img src={image} alt="" className={styles.image} />
          </div>
          {isOwner && (
            <div className={styles.buttons}>
              <Button text="Transfer" color="secondary" onClick={onTransferButtonClick} block />
              <Button text="Approve" onClick={onApproveButtonClick} block />
              <Button text="PlayGame" onClick={onPlayGameButtonClick} block />
            </div>
          )}
        </section>
        <section>
          <div className={detailsClassName}>
            <Card heading="Owner" text={ownerId} />
            {/* {rarity && <Card heading="Rarity" text={rarity} />} */}
            <Card heading="Description" text={description} />
            {attributes && <Attributes attributes={attributes} />}

            <div>
              <h3>dynamic data:</h3>
              <ul className={styles.dynamicUl}>
                <li className={styles.attritem}>rarity:{extdata.rarity}</li>
                <li className={styles.attritem}>sex:{extdata.sex}</li>
                <li className={styles.attritem}>age:{extdata.age}</li>
                <li className={styles.attritem}>physicalAttack:{extdata.physicalAttack}</li>
                <li className={styles.attritem}>magicAttack:{extdata.magicAttack}</li>
                <li className={styles.attritem}>physicalDefense:{extdata.physicalDefense}</li>
                <li className={styles.attritem}>magicDefense:{extdata.magicDefense}</li>
              </ul>
            </div>
          </div>
          {isAnyApprovedAccount && <Addresses list={approvedAccounts} onAddressClick={onRevokeButtonClick} isOwner={isOwner} />}
        </section>
      </div>
    </>
  );
}

export { Content };
