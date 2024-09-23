interface Props {
  link: string;
}

export default function PatternLink({ link }: Props) {
  return (
    <p>
      Want to make it yourself? The pattern can be found{' '}
      <a href={link} target='_blank'>
        here
      </a>
      !
    </p>
  );
}
