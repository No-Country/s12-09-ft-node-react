'use client'

import { useModal } from '@/modal/';
import { BudgetIcon } from '@/assets/svg';
import { Button } from '.';
import Budget from './Budget';
import type { Budget as BudgetType } from '@/@types';

interface Props {
  budget: BudgetType[]
}

const AcceptBudget = ({budget}: Props) => {
    const { openModal } = useModal();
    return (
      <div className='fixed z-index-10 bottom-[2rem] right-0 left-0 flex justify-center'>
        <Button
          onClick={() => {
            openModal(<Budget budget={budget} />);
          }}
          className='rounded-[50%] bg-white border-2 hover:text-white'
        >
          <BudgetIcon />
        </Button>
      </div>
    );
}

export default AcceptBudget