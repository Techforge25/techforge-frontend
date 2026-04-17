type SectionHeadingProps = {
  line1: string;
  line2Before?: string;
  line2Highlight?: string;
  line2After?: string;
  line1WithHighlightSameLine?: boolean;
  className?: string;
  line1ClassName?: string;
  line2ClassName?: string;
  highlightClassName?: string;
};

export default function SectionHeading({
  line1,
  line2Before = "",
  line2Highlight = "",
  line2After = "",
  line1WithHighlightSameLine = false,
  className = "",
  line1ClassName = "",
  line2ClassName = "",
  highlightClassName = "",
}: SectionHeadingProps) {
  const hasSecondLine = Boolean(line2Before || line2Highlight || line2After);

  return (
    <h2
      className={`bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-medium uppercase text-transparent ${className}`}
    >
      <span className={`block ${line1ClassName}`}>
        {line1WithHighlightSameLine ? (
          <>
            {line1}{" "}
            {line2Highlight ? (
              <span
                className={`inline-block rounded-[130px] bg-[#2424A6] px-2.5 sm:px-3 ${highlightClassName}`}
              >
                <span className="bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.2)] bg-clip-text text-transparent">
                  {line2Highlight}
                </span>
              </span>
            ) : null}
          </>
        ) : (
          line1
        )}
      </span>
      {hasSecondLine ? (
        <span className={`block ${line2ClassName}`}>
          {line2Before ? <>{line2Before} </> : null}
          {!line1WithHighlightSameLine && line2Highlight ? (
            <span
              className={`inline-block rounded-[130px] bg-[#2424A6] px-2.5 sm:px-3 ${highlightClassName}`}
            >
              <span className="bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.2)] bg-clip-text text-transparent">
                {line2Highlight}
              </span>
            </span>
          ) : null}
          {line2After ? <> {line2After}</> : null}
        </span>
      ) : null}
    </h2>
  );
}
