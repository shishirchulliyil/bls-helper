import { TimeSlotT } from '../../types/WalkinTypes';

type Props = {
  timeSlot: TimeSlotT;
  index: number;
};

const TimeSlot = ({ timeSlot, index }: Props) => {
  return (
    <div>
      <p>
        <span>{timeSlot.time} - </span>
        <span>{timeSlot.availableTokens}</span>
        <input type="radio" />
      </p>
    </div>
  );
};
export default TimeSlot;
