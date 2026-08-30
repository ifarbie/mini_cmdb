package farizrifkyb.mini_cmdb.model.response;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateApplicationGroupRequest {
    @NotBlank
    private Long id;

    @NotBlank
    private Long application_id;

    @NotBlank
    @Size(max = 100)
    private String name;

    private String description;
}
