import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { FaFeather } from 'react-icons/fa'
import useLoginModal from '../../hooks/useLoginModal'
import useCurrentUser from '../../hooks/useCurrentUser'

type Props = {}

const SidebarTweetButton = (props: Props) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);
  
  return (
    <div onClick={onClick}>
      <div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
        <FaFeather size={24} color='white' />
      </div>
      <div className='mt-6 hidden lg:block rounded-full px-4 py-2 bg-sky-500 hover:bg-opacity-90 transition cursor-pointer'>
        <p className='hidden lg:block text-center font-semibold text-white text-[20px]'>Tweet</p>
      </div>
    </div>
  )
}

export default SidebarTweetButton